import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CustomSelectInput({ label, onChange, onBlur, value, disabled, ...otherProps }) {
  return (
    <View >
        {!label ? null :
            <Text className="py-2">
                {label}
            </Text>
        }
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Pendiente', value: false },
                { label: 'Terminada', value: true },
            ]}
            placeholder={{}}
            style={{
                inputAndroid: {
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                    borderWidth: 1,
                    borderColor: 'white',
                    borderRadius: 16,
                    color: 'white',
                    paddingRight: 4,
                    backgroundColor: 'white',
                    opacity: disabled ? 0.5 : 1,
                },
                inputIOS: {
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                    borderWidth: 1,
                    borderColor: 'white',
                    borderRadius: 16,
                    color: 'white',
                    paddingRight: 4,
                    backgroundColor: 'white'
                },
                iconContainer: {
                    top: 16,
                    right: 10,
                  },
                  placeholder: {
                    color: 'purple',
                    fontSize: 12,
                    fontWeight: 'bold',
                  },
            }}
            Icon={()=><Ionicons name="chevron-down" size={16} color="white" />}
            useNativeAndroidPickerStyle={false}
            disabled={disabled}
            {...otherProps}
        />
    </View>
  );
}

