import axios from "axios";
import {
  EmailInput,
  FormProvider,
  NumberInput,
  PasswordInput,
  SelectInput,
  SubmitButton,
  TextArea,
  TextInput,
} from "formx-test";
import "./App.css";
import { DisplayValues } from "./DisplayValues";
function App() {
  const NameValidators = [
    {
      validator: (value: string) => value !== "",
      message: "Name cannot be empty",
    },
    {
      validator: (value: string) => value.length >= 6,
      message: "Minimum should be of 6 characters",
    },
  ];
  const EmailValidators = [
    {
      validator: async (value: string) => {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        return response.status === 200;
      },
      message: "Email already in use",
    },
  ];

  return (
    <>
      <header className="text-3xl">
        <h6 className="font-source_code">FormX Demo</h6>
      </header>
      <FormProvider
        onSubmit={(formValues: { [key: string]: any }) => {
          alert(JSON.stringify(formValues));
          console.log(formValues);
        }}
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col gap-4 p-4 text-left">
            {/* First Name Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="first_name" className="font-medium">
                First Name
              </label>
              <TextInput
                id="first_name"
                validators={NameValidators}
                placeholder="Enter your first name"
                debounce={1000}
              />
            </div>
            {/* Age Feild */}
            <div className="flex flex-col gap-1">
              <label htmlFor="age" className="font-medium">
                Age
              </label>
              <NumberInput
                id="age"
                minNumber={18}
                maxNumber={65}
                placeholder="Select Your Age"
                required
              />
            </div>
            {/* Email Input Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email_id" className="font-medium">
                Email
              </label>
              <EmailInput
                id="email_id"
                placeholder="Enter your email"
                validators={EmailValidators}
                debounce={1000}
              />
            </div>

            {/* Password Input Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-medium">
                Password
              </label>
              <PasswordInput
                id="password"
                placeholder="Enter your password"
                debounce={1000}
              />
            </div>

            {/* Feedbackk*/}
            <div className="flex flex-col gap-1">
              <label htmlFor="feedback" className="font-medium">
                Additional Comments
              </label>
              <TextArea
                id="feedback"
                placeholder="Let us know "
                rows={4}
                required
              />
            </div>

            {/* Location Select Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="location" className="font-medium">
                Location
              </label>
              <SelectInput
                id="location"
                options={[
                  { label: "Karnataka", value: "karnataka" },
                  { label: "Goa", value: "goa" },
                ]}
                placeholder="Select a city"
                defaultValue={""}
              />
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <SubmitButton text="Submit" />
            </div>
          </div>
          <DisplayValues />
        </div>
      </FormProvider>
    </>
  );
}

export default App;
