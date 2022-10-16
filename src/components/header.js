import {View, Text, Image} from 'react-native';

const getIcon = icon => {


    if(icon == "favorite"){
      return require(`../assets/icons/u_star.png`)
    }
    else if(icon == "cup"){
      return require(`../assets/icons/u_cup.png`)
    }
    else if(icon == "cc"){
      return require(`../assets/icons/u_credit-card.png`)
    }
    else{
      return require(`../assets/icons/u_location-point.png`)
    }
   
}

const NavHead = (title, icon) => (



     {
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
            <View style={{display:'flex',flexDirection: 'row',padding: 10,}}>
              <Image source={
                        require('../assets/icons/u_bell.png')
                    } style={{marginHorizontal: 8}}/>
                    <Image source={
                        require('../assets/icons/u_ellipsis-v.png')
                    } style={{marginHorizontal: 8}}/>
                    </View>
        ),
        tabBarLabel: '',
        tabBarIcon: () => (
          <Image 
              source={
                getIcon(icon)
              }
              />
      ),
    }
    )


export default NavHead
