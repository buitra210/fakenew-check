import { LoaderCircle, X } from 'lucide-react';

interface StatusCheckProps {
  status: 'pending' | 'success' | 'error';
  noData?: boolean;
}

export default function StatusCheckQuery(props: StatusCheckProps) {
  const { status, noData } = props;

  return (
    <div className="flex items-center justify-center h-full">
      {status == 'pending' && (
        <LoaderCircle className="w-10 h-10 animate-spin text-primary" />
      )}
      {status == 'error' && <X className="w-10 h-10 text-destructive" />}
      {noData && status != 'pending' && (
        <LoaderCircle className="w-10 h-10 animate-spin text-primary" />
      )}

      {/* {status == 'error' && <LoaderCircle className="w-10 h-10 animate-spin text-primary" />} */}
      {/* {status == 'success' && noData && <Database className="w-10 h-10 text-muted-foreground" />} */}
      {/* {status == 'success' && noData && <LoaderCircle className="w-10 h-10 animate-spin text-primary" />} */}
    </div>
  );
}
