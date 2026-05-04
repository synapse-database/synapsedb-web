import { StyleSheet, Text, View } from 'react-native';

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
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  techTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
    color: '#333',
  },
  techList: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666',
    textAlign: 'left',
    lineHeight: 24,
  }
})

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>关于 SynapseDB</Text>
      <Text style={styles.description}>
        SynapseDB 是一个超融合数据库集群架构，通过将 Oracle listener 和 Greenplum 融合，
        实现分布式数据库集群，同时具备 listener 的不同节点同时发起事务能力，
        Greenplum 的分布式 MPP 数据库能力。
      </Text>
      <Text style={styles.description}>
        我们致力于提供简单易用且功能强大的数据库解决方案，为企业级应用提供高性能、高可用的数据管理平台。
      </Text>
      <Text style={styles.techTitle}>技术说明</Text>
      <Text style={styles.techList}>• 超融合数据库集群架构</Text>
      <Text style={styles.techList}>• Oracle listener 和 Greenplum 融合技术</Text>
      <Text style={styles.techList}>• 分布式数据库集群实现</Text>
      <Text style={styles.techList}>• 多节点并发事务处理能力</Text>
      <Text style={styles.techList}>• Greenplum 分布式 MPP 数据库能力</Text>
      <Text style={styles.techList}>• React Native 跨平台开发</Text>
      <Text style={styles.techList}>• 现代化的 UI/UX 设计</Text>
      <Text style={styles.techList}>• 高性能数据处理引擎</Text>
      <Text style={styles.techList}>• 安全可靠的数据存储</Text>
    </View>
  );
}

