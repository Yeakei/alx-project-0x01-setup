export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
    username: string;
    street: string;
    catchPhrase: string;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface UserData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}