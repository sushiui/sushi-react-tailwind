export interface InputUploadProps {
  acceptType?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onError?: (error: InputUploadError) => void;
  fileName?: string | null;
  isUploading?: boolean;
  error?: React.ReactNode;
  customDownload?: React.ReactNode;
  onDownload?: () => void;
  downloadLabel?: string;
  showDownload?: boolean;
  isDownloading?: boolean;
  acceptLabel?: React.ReactNode;
  name?: string;
  id?: string;
  placeholder?: string | null;
  maxSize?: string;
  maxSizeMessage: string;
  maxFileSizeNumber?: number;
  style?: React.CSSProperties;
  className?: string;
  placeholderClassName?: string;
  "data-testid"?: string;
  allowClear?: boolean;
  onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface InputUploadError {
  message: string;
}
