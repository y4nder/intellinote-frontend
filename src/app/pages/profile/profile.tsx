// "use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronLeft, ChevronRight, Plus, Trash2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { UserProfileSchema, UserProfileSchemaType } from "@/service/shared/schema"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAddProfile } from "@/service/profile/add-profile"

// Relationship options
const relationshipOptions = [
  { id: "parent", label: "Parent" },
  { id: "spouse", label: "Spouse" },
  { id: "sibling", label: "Sibling" },
  { id: "child", label: "Child" },
  { id: "friend", label: "Friend" },
  { id: "relative", label: "Relative" },
  { id: "colleague", label: "Colleague" },
  { id: "neighbor", label: "Neighbor" },
] as const

// Medical conditions options
const medicalConditionOptions = [
  { id: "diabetes", label: "Diabetes" },
  { id: "hypertension", label: "Hypertension" },
  { id: "asthma", label: "Asthma" },
  { id: "heart_disease", label: "Heart Disease" },
  { id: "epilepsy", label: "Epilepsy" },
  { id: "allergies", label: "Allergies" },
  { id: "cancer", label: "Cancer" },
] as const

// Disabilities options
const disabilityOptions = [
  { id: "visual_impairment", label: "Visual Impairment" },
  { id: "hearing_impairment", label: "Hearing Impairment" },
  { id: "physical_disability", label: "Physical Disability" },
  { id: "cognitive_disability", label: "Cognitive Disability" },
  { id: "speech_impairment", label: "Speech Impairment" },
] as const

// Mobility options
const mobilityOptions = [
  { value: "normal", label: "Normal" },
  { value: "wheelchair", label: "Wheelchair User" },
  { value: "blind", label: "Blind/Visually Impaired" },
  { value: "deaf", label: "Deaf/Hard of Hearing" },
  { value: "limited mobility", label: "Limited Mobility" }
] as const

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { mutate: addProfile } = useAddProfile()

  const form = useForm<UserProfileSchemaType>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      name: "",
      age: undefined,
      phoneNumber: "",
      fullAddress: "",
      latitude: undefined,
      longitude: undefined,
      emergencyContacts: [{ name: "", relationship: "", phoneNumber: "" }],
      medicalConditions: [],
      disabilities: [],
      mobility: "normal",
    },
    mode: "onChange",
  })

  const { control, handleSubmit, watch, formState, trigger, getValues, setValue } = form
  const { errors } = formState
  const watchedValues = watch()

  const handleNext = async () => {
    let isValid = false
    
    switch (step) {
      case 1:
        isValid = await trigger(["name", "age", "phoneNumber"])
        break
      case 2:
        isValid = await trigger(["fullAddress", "latitude", "longitude"])
        break
      case 3:
        const contacts = getValues("emergencyContacts")
        if (contacts === null) {
          isValid = true
        } else {
          const contactsValid = contacts!.every(contact => 
            contact.name && contact.relationship && contact.phoneNumber
          )
          isValid = contactsValid && await trigger("emergencyContacts")
        }
        break
      case 4:
        isValid = true
        break
    }

    if (isValid) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  const addEmergencyContact = () => {
    const currentContacts = getValues("emergencyContacts") || []
    setValue("emergencyContacts", [
      ...currentContacts,
      { name: "", relationship: "", phoneNumber: "" }
    ], { shouldValidate: true })
  }

  const removeEmergencyContact = (index: number) => {
    const currentContacts = getValues("emergencyContacts") || []
    if (currentContacts.length > 1) {
      setValue(
        "emergencyContacts",
        currentContacts.filter((_, i) => i !== index),
        { shouldValidate: true }
      )
    }
  }

  const onSubmit = async (data: UserProfileSchemaType) => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log("Form submitted:", data)
    setIsSubmitting(false)
    alert("Profile created successfully!")
    setStep(1)
    form.reset()

	addProfile(data)
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setValue("latitude", position.coords.latitude, { shouldValidate: true })
          setValue("longitude", position.coords.longitude, { shouldValidate: true })
        },
        (error) => {
          console.error("Error getting location:", error)
          alert("Error getting location. Please try again or enter coordinates manually.")
        },
      )
    } else {
      alert("Geolocation is not supported by this browser.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>Please complete all required information</CardDescription>
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Badge
                  key={i}
                  variant={step === i ? "default" : step > i ? "outline" : "secondary"}
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${step === i ? "bg-primary" : ""}`}
                >
                  {i}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Personal Information</h2>

                  <FormField
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age*</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            min="1"
                            {...field}
                            value={field.value ?? ""}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (value === "" || /^\d+$/.test(value)) {
                                const parsed = parseInt(value, 10);
                                field.onChange(isNaN(parsed) ? undefined : parsed);
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., 09123456789" 
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              if (value.length <= 11) {
                                field.onChange(value);
                              }
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter a valid Philippine phone number (09XXXXXXXXX or +639XXXXXXXXX)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 2: Address Information */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Address Information</h2>

                  <FormField
                    control={control}
                    name="fullAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Address*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your complete address" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={control}
                      name="latitude"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Latitude*</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="any"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value)
                                field.onChange(isNaN(value) ? undefined : value)
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={control}
                      name="longitude"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Longitude*</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="any"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value)
                                field.onChange(isNaN(value) ? undefined : value)
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="button" variant="outline" onClick={getLocation} className="w-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Current Location
                  </Button>
                </div>
              )}

              {/* Step 3: Emergency Contacts */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Emergency Contacts</h2>
                    <div className="flex gap-2">
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        onClick={() => {
                          if (getValues("emergencyContacts") === null) {
                            setValue("emergencyContacts", [{ name: "", relationship: "", phoneNumber: "" }]);
                          }
                          addEmergencyContact();
                        }}
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Contact
                      </Button>
                    </div>
                  </div>

                  {watchedValues.emergencyContacts?.map((contact, index) => (
                    <div key={index} className="space-y-4 p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Contact #{index + 1}</h3>
                        {watchedValues.emergencyContacts!.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeEmergencyContact(index)}
                            aria-label={`Remove contact ${index + 1}`}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        )}
                      </div>

                      <FormField
                        control={control}
                        name={`emergencyContacts.${index}.name`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Contact name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={control}
                        name={`emergencyContacts.${index}.relationship`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Relationship*</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select relationship" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {relationshipOptions.map((option) => (
                                  <SelectItem key={option.id} value={option.id}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={control}
                        name={`emergencyContacts.${index}.phoneNumber`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g., 09123456789" 
                                {...field}
                                onChange={(e) => {
                                  const value = e.target.value.replace(/\D/g, '');
                                  if (value.length <= 11) {
                                    field.onChange(value);
                                  }
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}

                  {watchedValues.emergencyContacts?.length === 0 && (
                    <div className="text-center py-4 text-muted-foreground">
                      No emergency contacts added yet
                    </div>
                  )}
                </div>
              )}

              {/* Step 4: Medical Information */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Medical Information</h2>

                  <FormField
                    control={control}
                    name="medicalConditions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Medical Conditions</FormLabel>
                        <div className="grid grid-cols-2 gap-2">
                          {medicalConditionOptions.map((option) => (
                            <FormItem key={option.id} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option.id)}
                                  onCheckedChange={(checked) => {
                                    const currentValue = field.value || []
                                    if (checked) {
                                      field.onChange([...currentValue, option.id])
                                    } else {
                                      field.onChange(currentValue.filter((value) => value !== option.id))
                                    }
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{option.label}</FormLabel>
                            </FormItem>
                          ))}
                        </div>
                        <FormDescription>Select all that apply</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="disabilities"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Disabilities</FormLabel>
                        <div className="grid grid-cols-2 gap-2">
                          {disabilityOptions.map((option) => (
                            <FormItem key={option.id} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option.id)}
                                  onCheckedChange={(checked) => {
                                    const currentValue = field.value || []
                                    if (checked) {
                                      field.onChange([...currentValue, option.id])
                                    } else {
                                      field.onChange(currentValue.filter((value) => value !== option.id))
                                    }
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{option.label}</FormLabel>
                            </FormItem>
                          ))}
                        </div>
                        <FormDescription>Select all that apply</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="mobility"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Mobility Status</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={"normal"}
                            className="flex flex-col space-y-1"
                          >
                            {mobilityOptions.map((option) => (
                              <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={option.value} />
                                </FormControl>
                                <FormLabel className="font-normal">{option.label}</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 5: Review and Submit */}
              {step === 5 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Review Your Information</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-lg">Personal Information</h3>
                      <Separator className="my-2" />
                      <dl className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <dt className="font-medium text-muted-foreground">Name:</dt>
                          <dd>{watchedValues.name || "Not provided"}</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Age:</dt>
                          <dd>{watchedValues.age || "Not provided"}</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Phone Number:</dt>
                          <dd>{watchedValues.phoneNumber || "Not provided"}</dd>
                        </div>
                      </dl>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg">Address Information</h3>
                      <Separator className="my-2" />
                      <dl className="grid grid-cols-1 gap-2 text-sm">
                        <div>
                          <dt className="font-medium text-muted-foreground">Full Address:</dt>
                          <dd>{watchedValues.fullAddress || "Not provided"}</dd>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <dt className="font-medium text-muted-foreground">Latitude:</dt>
                            <dd>{watchedValues.latitude || "Not provided"}</dd>
                          </div>
                          <div>
                            <dt className="font-medium text-muted-foreground">Longitude:</dt>
                            <dd>{watchedValues.longitude || "Not provided"}</dd>
                          </div>
                        </div>
                      </dl>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg">Emergency Contacts</h3>
                      <Separator className="my-2" />
                      {watchedValues.emergencyContacts === null ? (
                        <div className="text-sm text-muted-foreground">No emergency contacts provided</div>
                      ) : (
                        <div className="flex flex-wrap gap-4">
                          {watchedValues.emergencyContacts?.map((contact, index) => (
                            <div key={index} className="flex-1 min-w-[250px] p-3 border rounded-md">
                              <h4 className="font-medium">Contact #{index + 1}</h4>
                              <dl className="grid grid-cols-1 gap-1 text-sm mt-1">
                                <div>
                                  <dt className="font-medium text-muted-foreground">Name:</dt>
                                  <dd>{contact.name || "Not provided"}</dd>
                                </div>
                                <div>
                                  <dt className="font-medium text-muted-foreground">Relationship:</dt>
                                  <dd>{contact.relationship || "Not specified"}</dd>
                                </div>
                                <div>
                                  <dt className="font-medium text-muted-foreground">Phone Number:</dt>
                                  <dd>{contact.phoneNumber || "Not provided"}</dd>
                                </div>
                              </dl>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="font-medium text-lg">Medical Information</h3>
                      <Separator className="my-2" />
                      <dl className="grid grid-cols-1 gap-2 text-sm">
                        <div>
                          <dt className="font-medium text-muted-foreground">Medical Conditions:</dt>
                          <dd>
                            {watchedValues.medicalConditions && watchedValues.medicalConditions.length > 0 ? (
                              <div className="flex flex-wrap gap-2 mt-1">
                                {watchedValues.medicalConditions.map((condition) => {
                                  const option = medicalConditionOptions.find((o) => o.id === condition)
                                  return (
                                    <Badge key={condition} variant="outline">
                                      {option ? option.label : condition}
                                    </Badge>
                                  )
                                })}
                              </div>
                            ) : (
                              "None specified"
                            )}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Disabilities:</dt>
                          <dd>
                            {watchedValues.disabilities && watchedValues.disabilities.length > 0 ? (
                              <div className="flex flex-wrap gap-2 mt-1">
                                {watchedValues.disabilities.map((disability) => {
                                  const option = disabilityOptions.find((o) => o.id === disability)
                                  return (
                                    <Badge key={disability} variant="outline">
                                      {option ? option.label : disability}
                                    </Badge>
                                  )
                                })}
                              </div>
                            ) : (
                              "None specified"
                            )}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Mobility Status:</dt>
                          <dd>
                            <Badge variant="outline">
                              {watchedValues.mobility === "normal"
                                ? "Normal"
                                : watchedValues.mobility === "wheelchair"
                                  ? "Wheelchair User"
                                  : watchedValues.mobility === "blind"
                                    ? "Blind/Visually Impaired"
                                    : watchedValues.mobility === "deaf"
                                      ? "Deaf/Hard of Hearing"
                                      : watchedValues.mobility === "limited mobility"
                                        ? "Limited Mobility"
                                        : "Not specified"}
                            </Badge>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex justify-between">
		{step > 1 && (
			<Button type="button" variant="outline" onClick={handlePrevious} disabled={isSubmitting}>
			<ChevronLeft className="mr-2 h-4 w-4" />
			Previous
			</Button>
		)}
		{step === 1 && <div />}

		<div className="flex gap-2">
			{step === 3 && (
			<Button 
				type="button" 
				variant="outline" 
				onClick={() => {
				setValue("emergencyContacts", null, { shouldValidate: true });
				handleNext();
				}}
			>
				Skip
			</Button>
			)}
			{step < 5 ? (
			<Button type="button" onClick={handleNext}>
				Next
				<ChevronRight className="ml-2 h-4 w-4" />
			</Button>
			) : (
			<Button type="submit" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
				{isSubmitting ? "Submitting..." : "Submit"}
			</Button>
			)}
		</div>
		</CardFooter>
      </Card>
    </div>
  )
}