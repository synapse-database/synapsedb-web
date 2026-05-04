import { StyleSheet, Text, View } from 'react-native';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>联系我</Text>
      <Text style={styles.subtitle}>欢迎与我联系！</Text>
      <Text style={styles.email}>邮箱：zhanshenhxy@163.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 10,
  }
})

