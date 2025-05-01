import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form/form"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner";
import { useCreateAlert } from "@/service/alert/create-alert";
import { CreateDisasterAlertInput, CreateDisasterAlertSchema } from "@/service/shared/schema";
import { useReverseGeocoding } from "@/service/location/user-reverse-geo";

interface AlertFormProps {
  initialLocation: {
    latitude: number
    longitude: number
    locationName?: string
  } | null
  onClose: () => void
}

export default function AlertForm({ initialLocation, onClose }: AlertFormProps) {
  const createAlert = useCreateAlert()
  const {data, refetch} = useReverseGeocoding(initialLocation?.latitude!, initialLocation?.longitude!);

  useEffect(() => {
    refetch();
  }, [initialLocation])

  const form = useForm<CreateDisasterAlertInput>({
    resolver: zodResolver(CreateDisasterAlertSchema),
    defaultValues: {
      type: "",
      description: "",
      latitude: initialLocation?.latitude || 0,
      longitude: initialLocation?.longitude || 0,
      severity: "Medium",
      locationName: data?.display_name || "",
      affectedRadius: 500,
    },
  })

  const onSubmit = async (data: CreateDisasterAlertInput) => {
    try {
      await createAlert.mutateAsync(data)
      toast("Alert created")
      onClose()
    } catch (error) {
      toast("Failed to create Alert")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Create Disaster Alert</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>Report a disaster or emergency situation</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alert Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select alert type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Flood">Flood</SelectItem>
                        <SelectItem value="Fire">Fire</SelectItem>
                        <SelectItem value="Earthquake">Earthquake</SelectItem>
                        <SelectItem value="Hurricane">Hurricane</SelectItem>
                        <SelectItem value="Tornado">Tornado</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the situation..." className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="latitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Latitude</FormLabel>
                      <FormControl>
                        <Input type="number" step="any" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="longitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Longitude</FormLabel>
                      <FormControl>
                        <Input type="number" step="any" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="severity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Severity</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select severity" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="locationName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Downtown, River Park" {...field} />
                    </FormControl>
                    <FormDescription>Optional: Provide a recognizable name for this location</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="affectedRadius"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Affected Radius (meters)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        step="0.1"
                        {...field}
                        onChange={(e) => field.onChange(Number.parseFloat(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>Optional: Estimated affected area radius in kilometers</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={createAlert.isPending}>
                {createAlert.isPending ? "Creating..." : "Create Alert"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}
