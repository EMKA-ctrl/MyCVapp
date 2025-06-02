
import { StyleSheet } from "react-native";
import { ch } from "./dimensions";

export const gen_styles = StyleSheet.create({
    gen_header:{
        borderWidth:1,
        flex:1,
        height:ch(60),
        marginTop:ch(35),
    },

    container: { 
        
        flex:1,
        flexShrink: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        margin:ch(12),
        padding: ch(8),
        borderRadius: 15,
        marginBottom: ch(2),
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        

    },

    images_logos:{
        width:ch(80),
        height:ch(80),
        margin:ch(10),
        
    },
    certificates:{fontWeight:'200',textAlign:'center',fontSize:ch(14.5)}





})