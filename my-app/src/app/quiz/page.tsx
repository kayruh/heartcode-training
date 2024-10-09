"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const FormSchema = z.object({
	name: z.string({
    	required_error: "Please enter a name"
	}).min(2, {
    	message: "name must be more than 2 characters long"
	}).max(20, {
    	message: "name must be no longer than 20 characters"
	}),
	question1: z.string({
    	required_error: "Please select an option"
	})
})


export default function Quiz() {
	const { toast } = useToast();

	const form = useForm<z.infer<typeof FormSchema>>({
    	resolver: zodResolver(FormSchema)
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
    	if (data.question1 === "yes") {
        	toast({
            	title: `Congratulations ${data.name}`,
            	description: "You are a drug dealer",
        	})
    	} else {
        	toast({
            	title: `Thank you ${data.name}`,
            	description: "Unfortunately you are not a drug dealer",
        	})
    	}
}


	return (
    	<Form {...form}>
        	<form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
            	<FormField
                	control={form.control}
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 1:</FormLabel>
                        	<FormDescription>What is your name?</FormDescription>
                            	<FormControl>
                                	<Input placeholder="your name here" {...field}/>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
            	<FormField
                	control={form.control}
                	name="question1"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 2:</FormLabel>
                        	<FormDescription>Do you sell drugs?</FormDescription>
                        	<Select onValueChange={field.onChange} defaultValue={field.value}>
                            	<FormControl>
                                	<SelectTrigger>
                                    	<SelectValue placeholder="Please select an answer"/>
                                	</SelectTrigger>
                            	</FormControl>
                            	<SelectContent>
                                	<SelectItem value="yes">Yes</SelectItem>
                                	<SelectItem value="no">No</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
            	<Button type="submit">Submit</Button>
        	</form>
    	</Form>
	)
}



    


// day 2 code for js ans in quiz, no solution 
// export default function Quiz() {
//     // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     },
//   })
//    // 2. Define a submit handler.
//    function onSubmit(values: z.infer<typeof formSchema>) {
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     console.log(values)
//   }

//     return (
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <FormField
//               control={form.control}
//               name="username"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Username</FormLabel>
//                   <FormControl>
//                     <Input type="number" placeholder="Answer here" {...field} />
//                   </FormControl>
//                   <FormDescription>
//                     This is your public display name.
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//               />
//             <FormField
//             control={form.control}
//             name="question1"
//             render={({ field }) => (
//                 <FormItem>
//                 <FormLabel>Question 1</FormLabel>
//                 <FormControl>
//                     <Input type="number" placeholder="Answer here" {...field} />
//                 </FormControl>
//                 <FormDescription>
//                     What is the maximum amount of marijuana you can carry before the death penalty
//                 </FormDescription>
//                 <FormMessage />
//                 </FormItem>
//                 )}
//                 />
//             <FormField
//             control={form.control}
//             name="question2"
//             render={({ field }) => (
//                 <FormItem>
//                 <FormLabel>Question 2</FormLabel>
//                 <FormControl>
//                     <Input type="number" placeholder="Answer here" {...field} />
//                 </FormControl>
//                 <FormDescription>
//                     What is the penalty for smuggling drugs into Singapore
//                 </FormDescription>
//                 <FormMessage />
//                 </FormItem>
//                 )}
//                 />
//             <Button type="submit">Submit</Button>
//           </form>
//           </Form>
//   );
// }