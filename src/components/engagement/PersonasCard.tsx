import React from 'react';
import { ScrollView } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

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
  const theme = useTheme();

  // Function to split items into three columns with explicit typing
  const splitIntoColumns = (items: InfoItem[]): InfoItem[][] => {
    const columns: InfoItem[][] = [[], [], []];
    items.forEach((item, index) => {
      columns[index % 3].push(item);
    });
    return columns;
  };

  return (
    <StyledScrollView contentContainerStyle={{ padding: 20 }}>
      {data.map((section, index) => (
        <SectionContainer key={index}>
          <SectionTitle theme={theme}>{section.sectionTitle}</SectionTitle>
          <ColumnsContainer>
            {splitIntoColumns(section.items).map((column, colIndex) => (
              <Column key={colIndex}>
                {column.map((item, idx) => (
                  <ItemContainer key={idx}>
                    <ItemTitle theme={theme}>{item.title}</ItemTitle>
                    <ItemDetails theme={theme}>{item.details}</ItemDetails>
                  </ItemContainer>
                ))}
              </Column>
            ))}
          </ColumnsContainer>
        </SectionContainer>
      ))}
    </StyledScrollView>
  );
};

// Styled Components
const StyledScrollView = styled(ScrollView)`
  background-color: #f3f4f6;
  border-radius: 15px;
  margin-vertical: 10px;
  elevation: 5;
  shadow-opacity: 0;
  shadow-radius: 8px;
`;

const SectionContainer = styled.View`
  margin-bottom: 20px;
`;

const SectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.title}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 10px;
  color: #333;
`;

const ColumnsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.View`
  flex: 1;
  padding-horizontal: 5px;
`;

const ItemContainer = styled.View`
  margin-bottom: 10px;
`;

const ItemTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.normal}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #666;
`;

const ItemDetails = styled.Text`
  font-size: ${({ theme }) => theme.fontsize.normal}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #333;
`;

export default PersonasCard;
