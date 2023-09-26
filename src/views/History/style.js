const styles = {
    container:{
        paddingTop: 25, paddingLeft: 18, paddingRight: 18
    },
    header: {
        paddingTop: 25,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title:{
        paddingTop: 10,
        paddingBottom: 10,
    },
    artistListContainer: {
        paddingTop: 20,
    },
    artistList:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    artist: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    card:{},
    newSongContainer: {
      paddingTop: 20,
    },
    newSong: {
      display: 'flex'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40,
    },
    searchBarView: {
      height: 50,
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
    searchBar: {
      flex: 1,
      height: 40,
      backgroundColor: '#eee',
      marginRight: 10,
      borderRadius: 4,
      paddingLeft: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    userProfileImage: {
      width: 40,
      height: 40,
      borderRadius: 100,
    },
    storiesView: {
      paddingHorizontal: 10,
      marginTop: 10,
    },
    storiesViewTitleView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    storiesViewTitle: {
      color: '#333',
      fontFamily: 'QuicksandSemiBold',
    },
    showAllText: {
      color: '#666',
      fontFamily: 'QuicksandSemiBold',
    },
    storyUserProfile: {
      marginRight: 20,
      borderColor: '#096C39',
      borderWidth: 2.5,
      borderRadius: 100,
    },
    storyUserProfileImage: { width: 60, height: 60, borderRadius: 100 },
    postsView: { paddingHorizontal: 10, marginTop: 10 },
    postView: {
      paddingVertical: 10,
      marginTop: 10,
      backgroundColor: '#ddd',
      borderRadius: 10,
      shadowColor: '#ddd',
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 8,
    },
    postHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    postStatsOpacity: {
      backgroundColor: '#fff',
      padding: 8,
      borderRadius: 6,
      flexDirection: 'row',
      alignItems: 'center',
    }
  }

export default styles;