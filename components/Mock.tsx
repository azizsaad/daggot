import { verifyInstallation } from 'nativewind';
import { Text, View } from "react-native";


const MockHeader = () => {
    // Verify NativeWind installation. Remove this line when nativewind is set up.
    verifyInstallation();
    return (
        <View className='p-4 bg-yellow-200 w-full border-t-8 border-red-500 rounded-lg'>
            <Text className='text-green-500'>Hello</Text>
        </View>
    )
}

export default MockHeader;