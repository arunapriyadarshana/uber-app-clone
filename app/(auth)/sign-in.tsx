import { useState } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignUp = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const onSignUpPress = () => {
    console.log(form);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[200px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[220px]" />
          <Text className="absolute text-2xl text-black font-JakartaSemiBold bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>
        <View className="p-5">
          
          <InputField
            label="Email"
            placeholder="Enter Your Email"
            icon={icons.email}
            value={form.email}
            onChange={(event) => setform({ ...form, email: event.nativeEvent.text })}
          />
          <InputField
            label="Password"
            placeholder="Enter Your Password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChange={(event) => setform({ ...form, password: event.nativeEvent.text })}
          />
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="w-full mt-5"
          />
          <OAuth />

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Don't have an account? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
