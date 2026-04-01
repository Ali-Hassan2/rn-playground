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

const contactsStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  contactsListItems: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginTop: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },
  contactsItemsText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#111827',
  },
});
export { FlatListStyles, contactsStyles };
