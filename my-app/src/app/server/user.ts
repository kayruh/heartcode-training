"use server"
import { db } from "@/db/index";
import { users } from "@/db/schema";

export async function insertOneUser(name:string, isDrugDealer: boolean){
    await db.insert(users).values({name: name, isDrugDealer: isDrugDealer})
}