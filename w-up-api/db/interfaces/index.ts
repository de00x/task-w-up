export interface ITodos {
  id: string;
  header: string;
  description: string;
  date: string | null;
  filePath?: string | null;
  isCompleted?: boolean;
}
