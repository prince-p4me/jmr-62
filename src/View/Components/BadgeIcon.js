import { View, Text } from "react-native";
import React from "react";
import { Badge } from "native-base";
import { Colors, Fonts } from "../Themes";
import { connect } from "react-redux";

class BadgeIcon extends React.Component {

    render() {
        const count = this.props.sections.reduce(
            (acc, section) => acc + section.products.length,
            0
        );
        if (!count) {
            return <View />
        }
        return (
            <Badge style={{
                backgroundColor: Colors.ember,
                alignSelf: "center",
                position: "absolute",
                bottom: 0,
                right: -15,
                justifyContent: "center"
            }}>
                <Text style={{
                    fontSize: Fonts.size.medium,
                    fontWeight: "bold",
                    color: Colors.snow
                }}>{count}</Text>
            </Badge>
        )
    }
}

const mapStateToProps = ({ cart }) => ({
    sections: cart.sections
});

//   const mapDispatchToProps = actions;
export default connect(
    mapStateToProps,
    null
)(BadgeIcon);
