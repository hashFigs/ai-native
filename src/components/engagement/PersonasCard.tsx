import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface InfoItem {
  title: string;
  details: string;
}

interface InfoSection {
  sectionTitle: string;
  items: InfoItem[];
}

interface InfoCardProps {
  data: InfoSection[];
}

const PersonasCard: React.FC<InfoCardProps> = ({ data }) => {
  // Function to split items into three columns with explicit typing
  const splitIntoColumns = (items: InfoItem[]): InfoItem[][] => {
    const columns: InfoItem[][] = [[], [], []]; 
    items.forEach((item, index) => {
      columns[index % 3].push(item); 
    });
    return columns;
  };

  return (
    <ScrollView contentContainerStyle={styles.cardContainer}>
      {data.map((section, index) => (
        <View key={index} style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{section.sectionTitle}</Text>
          <View style={styles.columnsContainer}>
            {splitIntoColumns(section.items).map((column, colIndex) => (
              <View key={colIndex} style={styles.column}>
                {column.map((item, idx) => (
                  <View key={idx} style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemDetails}>{item.details}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: '#f3f4f6',
    borderRadius: 15,
    marginVertical: 10,
    elevation: 5,
    shadowOpacity: 0,
    shadowRadius: 8,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    paddingHorizontal: 5,
  },
  itemContainer: {
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  itemDetails: {
    fontSize: 16,
    color: '#333',
  },
});

export default PersonasCard;
