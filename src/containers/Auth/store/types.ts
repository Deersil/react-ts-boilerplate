export interface IState {
	authentificated: boolean;
	email: string | null;
	firstName: string | null;
	lastName: string | null;
	loaded: boolean | null;
	loginLoading: boolean | null;
}
