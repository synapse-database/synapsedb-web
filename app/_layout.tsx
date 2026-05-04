// app/_layout.tsx
import { Slot, Link } from 'expo-router';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      {/* 自定义头部导航栏（模仿 Bootstrap） */}
      <View style={styles.navbar}>
        <Text style={styles.brand}>SynapseDB</Text>
        <View style={styles.navLinks}>
          <Link href="/" style={styles.link}>首页</Link>
          <Link href="/download" style={styles.link}>下载</Link>
          <Link href="/about" style={styles.link}>关于SynapseDB</Link>
          <Link href="/contact" style={styles.link}>联系我们</Link>
        </View>
      </View>

      {/* 内容区域 —— 相当于 <Outlet /> */}
      <View style={styles.content}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    // Web 端固定定位，原生端默认流式布局
    ...Platform.select({
      web: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      },
      default: {
        // 原生端一般直接放在顶部，不需要 fixed
      },
    }),
    backgroundColor: '#f8f9fa',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    height: 60, // 固定高度，用于计算内容区的 marginTop
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 16,
  },
  link: {
    color: '#0d6efd',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'none',
  },
  content: {
    flex: 1,
    // Web 端需要偏移出头部的高度，避免内容被遮挡
    ...Platform.select({
      web: {
        marginTop: 60, // 与 navbar 高度一致
      },
      default: {
        // 原生端通常不需要
      },
    }),
    padding: 16,
    backgroundColor: '#fff',
  },
});