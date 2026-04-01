import { StyleSheet } from 'react-native';

const FlatListStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: '#333',
    marginBottom: 4,
  },
  itemRollNo: {
    fontSize: 14,
    fontWeight: '500' as const,
    color: '#666',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: '#000',
    marginBottom: 16,
    marginTop: 10,
  },
});

export { FlatListStyles };
