import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {


    return (
        //  ใส่สไตล์ตกแต่ง
        <View style={myStyle.container}>
            <Text>natphimon</Text>
            {/* แสดงข้อความ */}
            <Text style={myStyle.titLe}>Witsarut 999</Text>

            {/* แสดงภาพจากไฟล์*/}
            <Image
                source={require('@/assets/images/cat.jpg')}
                style={{
                    width: 200, // กว้าง
                    height: 200,// สูง
                    borderRadius: 100,//ความโค้งของมุม
                    borderWidth: 10, // ความกว้างของขอบ
                    borderColor: "lightyellow" // สีของขอบ
                }}
            />
            {/* ใส่ภาพจากลิงก์*/}

            <Image
                source={{ uri: "https://inwfile.com/s-j/f5oy1w.jpg" }}
                style={{
                    width: 200, // กว้าง
                    height: 200,// สูง
                    borderRadius: 100,//ความโค้งของมุม
                    borderWidth: 10, // ความกว้างของขอบ
                    borderColor: "lightyellow" // สีของขอบ
                }}

            />
            < View style={{flexDirection:"row"}} >
                <Text>Cat🐱</Text>
                <Text>Dog🐶</Text>
                <Text>Duck🦆</Text>
                <Text>Bird🦢</Text>
                <Text>fish🐟</Text>
                <Text>Bird🦢</Text>
            </View >
        </View>
    )









}
const myStyle = StyleSheet.create({
    container: {
        // css บนเว็บ -> background-color
        backgroundColor: "red", // สีพื้นหลัง
        flex: 1, // ขยาย
        paddingTop: 80, // เพิ่มช่องว่างด้านบนในกล่อง 
    },
    titLe: {
        color: "blue", // สีอักษร
        fontSize: 20, // ขนาดตัวอักษร
        fontWeight: 700, // ความหนาอักษร
        textAlign: "center", // จัดแนวการวาง
    }





})





