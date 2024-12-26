import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";

export default function CategoryScreen({ route, navigation }) {
  const { categoryName } = route.params;

  const data = {
    Pesawat: [
      {
        id: "1",
        name: "Pesawat Tempur",
        description: "Bisa nembak.",
        image: "http://www.koran.id/wp-content/uploads/2019/07/1-12.jpg",
      },
      {
        id: "2",
        name: "Pesawat Boeing",
        description: "Keren.",
        image: "https://cdn.wallpapersafari.com/68/6/ISroup.jpg",
      },
    ],
    Kapal: [
      {
        id: "1",
        name: "Kapal Hantu",
        description: "Punya Flying Dutchman.",
        image:
          "https://pict.sindonews.net/dyn/850/pena/news/2022/10/30/768/926913/sejarah-kapal-hantu-flying-dutchman-ternyata-dimulai-dari-indonesia-ego.jpg",
      },
      {
        id: "2",
        name: "Kapal Laut",
        description: "Budi punya cita-cita.",
        image:
          "https://1.bp.blogspot.com/-sg-PbtNnk2A/VGROE5g0SGI/AAAAAAAAB7g/Qge9e-y9fdo/s1600/n00049564-b.jpg",
      },
    ],
    Mobil: [
      {
        id: "1",
        name: "Mobil mainan",
        description: "Umur 1 tahun kaeatas.",
        image:
          "https://s1.bukalapak.com/img/1674462832/w-1000/IMG_20180306_WA0018_scaled.jpg",
      },
      {
        id: "2",
        name: "Mobil Balap",
        description: "keren.",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.34NuIiSf_UM-dUuOLJO5BgHaEo&pid=Api&P=0&h=180",
      },
    ],
    Motor: [
      {
        id: "1",
        name: "Motor KLX",
        description: "Buat jalan yang kurang bagus enak.",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.riexCA0fdTcqUPV5ZiA2NwHaFj&pid=Api&P=0&h=180",
      },
      {
        id: "2",
        name: "Motor Scoopy",
        description: "Manis.",
        image:
          "https://imgcdn.oto.com/large/gallery/exterior/73/985/honda-scoopy-esp-right-side-viewfull-image-955742.jpg",
      },
    ],
  };

  const categoryItems = data[categoryName] || [];
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedItem(item)}>
            <Card style={styles.card}>
              <Card.Cover source={{ uri: item.image }} />
              <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph>{item.description}</Paragraph>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        Kembali ke Beranda
      </Button>

      {/* Modal for Image Preview */}
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!selectedItem}
          onRequestClose={() => setSelectedItem(null)}
        >
          <View style={styles.modalContainer}>
            <Image
              source={{ uri: selectedItem.image }}
              style={styles.modalImage}
            />
            <Text style={styles.modalTitle}>{selectedItem.name}</Text>
            <Button mode="contained" onPress={() => setSelectedItem(null)}>
              Tutup
            </Button>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
  button: {
    marginTop: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalImage: {
    width: 300,
    height: 300,
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    color: "white",
    marginBottom: 16,
  },
});
