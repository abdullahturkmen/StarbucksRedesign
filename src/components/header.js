import {StyleSheet} from 'react-native';
import {View, Text, Image, Pressable} from 'react-native';

const getIcon = (icon, focused) => {

    if (icon == "favorite") {
        if (!focused) {
            return require(`../assets/icons/u_star.png`)
        }
        return require(`../assets/icons/u_star-active.png`)
    } else if (icon == "cup") {
        if (!focused) {
            return require(`../assets/icons/u_cup.png`)
        }
        return require(`../assets/icons/u_cup-active.png`)
    } else if (icon == "cc") {
        if (!focused) {
            return require(`../assets/icons/u_credit-card.png`)
        }
        return require(`../assets/icons/u_credit-card-active.png`)
    } else if (icon == "location") {
        if (!focused) {
            return require(`../assets/icons/u_location-point.png`)
        }
        return require(`../assets/icons/u_location-point-active.png`)
    }

}

const NavHead = ({title, icon, backBtn}) => ({
    headerLeft: () => (
        
        <View style={{display: 'flex',flexDirection: 'row',alignItems: 'center'}}>
          
             {
                
                backBtn && (
                    <Pressable title='Geri' onPress={
                        () => console.log("geri gel")
                }><Image source={
                        require('../assets/icons/u_angle-right-b.png')
                    }
                    style={
                        style.headerIcon
                    }/></Pressable>
                )
             }
            <Text style={
                style.headerLeft
            }>
                {title}</Text>
        </View>
    ),
    headerTitle: () => (
        <></>
    ),
    headerRight: () => (
        <View style={
            style.headerRight
        }>
            <Image source={
                    require('../assets/icons/u_bell.png')
                }
                style={
                    style.headerIcon
                }/>
            <Image source={
                    require('../assets/icons/u_ellipsis-v.png')
                }
                style={
                    style.headerIcon
                }/>
        </View>
    ),
    tabBarLabel: '',
    tabBarIcon: ({focused}) => (
        <Image style={
                style.tabBarIcon
            }
            source={
                focused ? getIcon(icon, focused) : getIcon(icon)
            }/>
    )
})


const style = StyleSheet.create({
    tabBarIcon: {
        width: 26,
        height: 26
    },
    headerLeft: {
        color: '#1D4D4F',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 20
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10
    },
    headerIcon: {
        marginHorizontal: 8
    }
});


export default NavHead
