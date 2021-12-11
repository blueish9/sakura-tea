import React, { useContext, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import palette from './palette';

const OptionContext = React.createContext({});

export const OptionPicker = ({ title, children }) => {
  const [selectedItem, setSelected] = useState();
  return (
    <OptionContext.Provider value={{ selectedItem, setSelected }}>
      <SectionTitle>{title}</SectionTitle>
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: -10 }}
      >
        {children}
      </View>
    </OptionContext.Provider>
  );
};

export const Option = ({ title, subtitle, selected }) => {
  const { selectedItem, setSelected } = useContext(OptionContext);
  selected = selectedItem ? title === selectedItem : selected;
  return (
    <Pressable
      onPress={() => setSelected(title)}
      style={{
        paddingVertical: 8,
        paddingHorizontal: 8,
        flex: 1,
        marginHorizontal: 8,
        borderColor: palette.grayBorder,
        borderWidth: selected ? 0 : 1,
        backgroundColor: selected ? palette.pinkBackground : 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: subtitle ? 15 : 17,
          color: selected ? palette.pink : palette.black,
          fontWeight: selected ? 'bold' : '600',
        }}
      >
        {title}
      </Text>
      {!!subtitle && (
        <Text
          style={{
            marginTop: 2,
            fontSize: 13,
            color: selected ? palette.pink : '#A9A9A9',
            fontWeight: selected ? '600' : '400',
          }}
        >
          {subtitle}
        </Text>
      )}
    </Pressable>
  );
};

const SectionTitle = ({ children }) => {
  return (
    <Text
      style={{
        color: palette.black,
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 15,
      }}
    >
      {children}
    </Text>
  );
};
