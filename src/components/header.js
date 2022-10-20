import {View, Text, Image} from 'react-native';

const NavHead = (title) => ({
    headerLeft: () => (
        <View>
            <Text style={
                {
                    color: '#1D4D4F',
                    fontWeight: 'bold',
                    padding: 10,
                    fontSize: 20
                }
            }>
                {title}</Text>
        </View>
    ),
    headerTitle: () => (
        <></>
    ),
    headerRight: () => (
        <View style={
            {
                display: 'flex',
                flexDirection: 'row',
                padding: 10
            }
        }>
            <Image source={
                    require('../assets/icons/u_bell.png')
                }
                style={
                    {marginHorizontal: 8}
                }/>
            <Image source={
                    require('../assets/icons/u_ellipsis-v.png')
                }
                style={
                    {marginHorizontal: 8}
                }/>
        </View>
    )

})


export default NavHead
