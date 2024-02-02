import { View, Text, TextInput } from 'react-native';


export default function CustomTextInput({ label, onChange, onBlur, value, error, placeholder, ...otherProps }) {
  return (
    <View >
        {!label ? null :
          <Text className="py-2">
            {label}
          </Text>
        }
        <TextInput
        editable
        maxLength={40}
        onChangeText={text => onChange ? onChange(text) : null}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
        className="bg-white rounded-2xl"
        style={{padding: 10}}
        {...otherProps}
        />
        <Text className="text-sm text-red-400 pb-1">
          {error ? error : null}
        </Text>
    </View>
  );
}

