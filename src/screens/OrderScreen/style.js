import {StyleSheet} from 'react-native';
const OrderScreenStyles = StyleSheet.create({
    menuTitle: {
        paddingLeft: 10,
        paddingBottom: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    menuCategoryBtn: {
        borderWidth: 1,
        borderColor: '#DFE4EC',
        marginHorizontal: 5,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 4,
        color: '#2E2D38',
        fontSize: 14,
        fontWeight: 'bold'
    },
    itemAddCartBtn: {
        backgroundColor: '#4AA366',
        marginHorizontal: 5,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 4,
        color: '#FFFFFF',
        fontSize: 14,
        alignSelf: 'flex-end',
        fontWeight: 'bold',
    }
});


export default OrderScreenStyles;
