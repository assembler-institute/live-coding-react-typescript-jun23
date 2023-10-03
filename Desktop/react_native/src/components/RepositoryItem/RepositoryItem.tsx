import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

type RepositoryItemProps = {
	id: string;
	fullName: string;
	description: string;
	language: string;
	stargazersCount: number;
	reviewCount: number;
	ratingAverage: number;
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	boldtext: {
		fontWeight: "bold",
	},
	mb: {
		marginBottom: 10,
	},
	primary_color: {
		color: "#0366d6",
	},
});

const RepositoryItem: FC<RepositoryItemProps> = ({
	id,
	fullName,
	description,
	language,
	stargazersCount,
	reviewCount,
	ratingAverage,
}) => {
	return (
		<View key={id} style={styles.container}>
			<Text style={[styles.boldtext, styles.mb, styles.primary_color]}>
				{id}
			</Text>
			<Text>Full Name:{fullName}</Text>
			<Text>Description: {description}</Text>
			<Text>Language: {language}</Text>
			<Text>Starts: {stargazersCount}</Text>
			<Text>Review: {reviewCount}</Text>
			<Text>Rating: {ratingAverage}</Text>
		</View>
	);
};

export default RepositoryItem;
