import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';

const VideoGamesApp = () => {
  const games = [
    {
      title: 'The Witcher 3: Wild Hunt',
      author: 'CD Projekt Red',
      year: 2015,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSVPkaFHUqi7j7x_99rqiyDHESIT6fwrfdizqZfOuvgMYfI6ROfTgkUP2B7GUKZo9HHh8xXco7uzWBaA0FpF_F8MN-3YRIdR7L4b0Gg',
      description: 'Ролевая игра с открытым миром, продолжение приключений Геральта из Ривии.'
    },
    {
      title: 'Red Dead Redemption 2',
      author: 'Rockstar Games',
      year: 2018,
      imageUrl: 'https://i.ytimg.com/vi/eaW0tYpxyp0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfZCf-3KxB5YOHfSmdTCSK7OubhQ',
      description: 'Приключенческий боевик о банде Ван дер Линде на Диком Западе.'
    },
    {
      title: 'The Legend of Zelda: Breath of the Wild',
      author: 'Nintendo',
      year: 2017,
      imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvzcQ3aDY9fYKoWXi-ku8XUT-gVbydRh0ZlflCeSkruhyYEJcLvWn2a4iZklPKkDTjv9oneZY2OK3vGZKfEsrxxF_F110r-U1mp7U-KA',
      description: 'Игра в жанре action-adventure с открытым миром из серии The Legend of Zelda.'
    },
    {
      title: 'God of War',
      author: 'Santa Monica Studio',
      year: 2018,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQpOz7FWXT-EYGVlDHAen_JGCz9MiXpYjApdeDlcYs974L0CsdVeCQxsFG4ck_azr5TSRb7iihtOKBAS8I3f2nWwWhdALZfdFPsUMmf4Q',
      description: 'Приключенческий боевик о Кратосе и его сыне Атреусе.'
    },
    {
      title: 'Cyberpunk 2077',
      author: 'CD Projekt Red',
      year: 2020,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/b/bb/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B9_%D0%B8%D0%B3%D1%80%D1%8B_Cyberpunk_2077.jpg',
      description: 'Ролевая игра в жанре киберпанк с открытым миром.'
    },
    {
      title: 'Elden Ring',
      author: 'FromSoftware',
      year: 2022,
      imageUrl: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg?t=1744748041',
      description: 'Ролевая игра с открытым миром в жанре dark fantasy.'
    },
    {
      title: 'Grand Theft Auto V',
      author: 'Rockstar Games',
      year: 2013,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/c/c8/GTAV_Official_Cover_Art.jpg',
      description: 'Приключенческий боевик с открытым миром в вымышленном штате Сан-Андреас.'
    },
    {
      title: 'The Last of Us Part II',
      author: 'Naughty Dog',
      year: 2020,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjIXJ2PcgRkfF5ZKdCyXkbNgnxeA_TAoBww&s',
      description: 'Приключенческий боевик с элементами survival horror.'
    },
    {
      title: 'Horizon Zero Dawn',
      author: 'Guerrilla Games',
      year: 2017,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/9/93/Horizon_Zero_Dawn.jpg',
      description: 'Ролевая игра с открытым миром в постапокалиптическом сеттинге.'
    },
    {
      title: 'Dark Souls III',
      author: 'FromSoftware',
      year: 2016,
      imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRnteWEoPpftwHeOXqsL9wwuA6UydUErTzRvE88hTlYJe29lJmofzhuazYilrkB7HcrrBGKbmp6JQKmXbI7VolFMtzmxI5RVkayVsIU_Q',
      description: 'Ролевая игра в жанре dark fantasy с акцентом на сложный геймплей.'
    }
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);


  const nextGame = () => {
    if (currentIndex < games.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevGame = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };


  const currentGame = games[currentIndex];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {}
        <TouchableOpacity 
          onLongPress={() => setModalVisible(true)}
          activeOpacity={0.7}
        >
          <Image 
            source={{ uri: currentGame.imageUrl }} 
            style={styles.image} 
            resizeMode="contain"
          />
        </TouchableOpacity>

        {}
        <Text style={styles.title}>{currentGame.title}</Text>
        <Text style={styles.author}>{currentGame.author} ({currentGame.year})</Text>

        {}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={[styles.button, currentIndex === 0 && styles.disabledButton]} 
            onPress={prevGame}
            disabled={currentIndex === 0}
          >
            <Text style={styles.buttonText}>Предыдущий</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, currentIndex === games.length - 1 && styles.disabledButton]} 
            onPress={nextGame}
            disabled={currentIndex === games.length - 1}
          >
            <Text style={styles.buttonText}>Следующий</Text>
          </TouchableOpacity>
        </View>
      </View>

      {}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{currentGame.title}</Text>
            <Text style={styles.modalText}>{currentGame.description}</Text>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Закрыть</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    maxWidth: 500,
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 5,
    marginBottom: 15
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },
  author: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    minWidth: 120,
    alignItems: 'center'
  },
  disabledButton: {
    backgroundColor: '#cccccc'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  },
  closeButton: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default VideoGamesApp;