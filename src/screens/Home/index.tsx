import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import DiscoverProvider from "../../../sdk/discover/discover.provider";
import GenreProvider from "../../../sdk/genre/genre.provider";
import {
  IDiscoverDomain,
  IDiscoverMovieSuccess
} from "../../../sdk/discover/discover.interface";
import {
  IGenreDomain,
  IGenreSuccess
} from "../../../sdk/genre/genre.interface";
import { SimpleMovieList, GenreList } from "../../components";

const Home: FunctionComponent<{}> = () => {
  const [popularMovies, setPopulerMovies] = useState<IDiscoverDomain[]>([]);
  const [isLoadingPopularMovies, setIsLoadingPopularMovies] = useState<boolean>(
    true
  );

  const [genres, setGenres] = useState<IGenreDomain[]>([]);
  const fetchMovies = async () => {
    const { ok, data } = await DiscoverProvider.discoverMovies();

    if (ok) {
      const { results } = data as IDiscoverMovieSuccess;
      setPopulerMovies(results);
      setIsLoadingPopularMovies(false);
    } else {
      Alert.alert("Error", "Error Fetching Movies");
    }
  };

  const fetchGenreMovies = async () => {
    const { ok, data } = await GenreProvider.getMovieGenres();

    if (ok) {
      const dataOk = data as IGenreSuccess;
      setGenres(dataOk.genres);
    }
  };
  const onSelectMovie = (movie: IDiscoverDomain) => {
    console.log("movie", movie);
  };
  const onSelectGenre = (genre: IGenreDomain) => {
    console.log("genre", genre);
  };

  useEffect(() => {
    fetchMovies();
    fetchGenreMovies();
  }, []);

  return (
    <View style={styles.container}>
      {isLoadingPopularMovies ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <SimpleMovieList
          data={popularMovies}
          icon="ios-trending-up"
          onSelectMovie={onSelectMovie}
          title="Most popular releases:"
        />
      )}
      <GenreList
        data={genres}
        icon="ios-film"
        onSelectGenre={onSelectGenre}
        title="Looking for a genre?"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatListContainer: {
    height: 260
  }
});

export default Home;
