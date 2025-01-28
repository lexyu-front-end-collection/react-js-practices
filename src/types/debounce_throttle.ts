export interface Info {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}

export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: Location;
	location: Location;
	image: string;
	episode: string[];
	url: string;
	created: Date;
}

export interface Location {
	name: string;
	url: string;
}

export interface RickAndMortyResponse {
	info: Info;
	results: Character[];
}


export interface QueryParams {
	name?: string;
	page?: number;
}