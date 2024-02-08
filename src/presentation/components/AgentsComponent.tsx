import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import useAgents from '../hooks/useAgents';

const AgentsComponent = () => {
  const { agents, isLoading, error } = useAgents();

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <ScrollView style={styles.scrollView}>
      {agents.map((agent) => (
        <View key={agent.uuid} style={styles.agentContainer}>
          <Image source={{ uri: agent.displayIcon }} style={styles.icon} />
          <Text style={styles.name}>{agent.displayName}</Text>
          <Text style={styles.description}>{agent.description}</Text>
          <Image source={{ uri: agent.fullPortrait }} style={styles.fullPortrait} />
          <Text style={styles.detail}>Role: {agent.role.displayName}</Text>
          <Text style={styles.detail}>Abilities:</Text>
          {agent.abilities.map((ability, index) => (
            <Text key={index} style={styles.ability}>
              {ability.displayName}: {ability.description}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
  agentContainer: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  fullPortrait: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 10,
  },
  detail: {
    fontWeight: 'bold',
  },
  ability: {
    marginLeft: 10,
  },
});

export default AgentsComponent;
