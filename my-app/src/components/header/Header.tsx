import { View, Text } from "react-native";

import { styles } from "./style";

type Props = {
    title: string;
};

export function Header({title, ...rest}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}