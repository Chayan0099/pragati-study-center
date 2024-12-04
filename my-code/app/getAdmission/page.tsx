import  prisma  from '@/app/db/index';
import { z } from 'zod';

// Define the Zod schema
const userSchema = z.object({
  admDate: z.string().refine((value) => !isNaN(new Date(value).getTime()), {
    message: 'Invalid date format',
  }),
  studentName: z.string().min(1, { message: 'Name is required' }),
  number: z
    .string()
    .regex(/^\d+$/, { message: 'Phone number must be numeric' })
    .min(10, { message: 'Phone number must be at least 10 digits' }),
  email: z.string().email({ message: 'Invalid email address' }),
  studentClass:z.number({message: 'Class must be a number'}).min(5, {message:'Minimun value for class is 5'}).max(10, {message:'Maximum value for class is 10'})
});

// Define the type of valid user data
type UserData = z.infer<typeof userSchema>;

export default async function AddUser() {
  // Define the server action
  async function saveUser(data: FormData) {
    'use server';

    const formData = Object.fromEntries(data.entries());
    const validatedData = userSchema.safeParse(formData);

    if (!validatedData.success) {
      // Gather validation error messages
      const errors = validatedData.error.errors
        .map((e) => e.message)
        .join(', ');
      throw new Error(`Validation Error: ${errors}`);
    }

    const { admDate, studentName, number, email, studentClass } = validatedData.data;

    // Save to database
    await prisma.student.create({
      data: {
        admDate,
        studentName,
        number,
        email,
        studentClass,
        discounts: ""
      },
    });
  } 

  return (
    <form action={saveUser} className="space-y-4">
      <div>
        <label htmlFor="date" className="block font-medium">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          required
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="name" className="block font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block font-medium">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div>
        
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded p-2 mt-4"
      >
        Submit
      </button>
    </form>
  );
}


