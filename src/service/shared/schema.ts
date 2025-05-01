import {z} from "zod";

export const EmergencyContactSchema = z.object({
    name: z.string(),
    phoneNumber: z.string()
        .min(1, "Phone number is required")
        .regex(/^(09|\+639)\d{9}$/, "Invalid Philippine phone number format"),
    relationship: z.string(), 
});
  
export const UserProfileSchema = z.object({ 
    name: z.string().nonempty(),
    age: z.number(),
    phoneNumber: z.string()
        .min(1, "Phone number is required")
        .regex(/^(09|\+639)\d{9}$/, "Invalid Philippine phone number format"),
    fullAddress: z.string().nonempty(),
    latitude: z.number(),
    longitude: z.number(),
    emergencyContacts: z.array(EmergencyContactSchema).nullable().optional(),
    medicalConditions: z.array(z.string()).nullable().optional(),
    disabilities: z.array(z.string()).nullable().optional(),
    mobility: z.string().nullable().optional(),
    isVerified: z.boolean().nullable().optional(),
});

export const UpdateLocationSchema = z.object({
    latitude: z.number(),
    longitude: z.number()
})

export type  UserProfileSchemaType = z.infer<typeof UserProfileSchema>;  
export type  UpdateLocationSchemaType = z.infer<typeof UpdateLocationSchema >;

// ALERT
export const CreateDisasterAlertSchema = z.object({
  type: z.string(),
  description: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  locationName: z.string().optional(),
  severity: z.enum(["Low", "Medium", "High"]),
  affectedRadius: z.number().optional(),
});

export const DisasterAlertSchema = CreateDisasterAlertSchema.extend({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  createdBy: z.string().uuid(),
});

export type CreateDisasterAlertInput = z.infer<typeof CreateDisasterAlertSchema>;
export type DisasterAlertResponse = z.infer<typeof DisasterAlertSchema>;





// export const EmergencyContactSchema = z.object({
//     name: z.string().nonempty(),
//     relationship: z.array(z.string()).nonempty(),
//     phoneNumber: z.string().regex(
//         /^(?:\+63|0)?9\d{9}$/,
//         "Invalid Philippine phone number"
//     ),
//   });
  
// export const UserProfileSchema = z.object({
//     name: z.string().min(1),
//     age: z.number().int().min(0).max(120),
//     phoneNumber: z.string().regex(
//         /^(?:\+63|0)?9\d{9}$/,
//         "Invalid Philippine phone number"
//     ),
//     fullAddress: z.string(),
//     latitude: z.number(),
//     longitude: z.number(),
//     emergencyContacts: z.array(EmergencyContactSchema).min(1),
//     medicalConditions: z.array(z.string()).optional(),
//     disabilities: z.array(z.string()).optional(),
//     mobility: z.enum(["normal", "wheelchair", "blind", "deaf", "limited mobility"]).default("normal"),
// });
