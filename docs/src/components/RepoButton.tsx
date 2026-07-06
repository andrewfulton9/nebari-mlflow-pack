import { Button } from '@/components/ui/button';

export default function RepoButton() {
  return (
    <Button
      render={<a href="https://github.com/nebari-dev/mlflow-pack" />}
      variant="default"
      size="sm"
    >
      GitHub
    </Button>
  );
}
