import { Checkbox } from "./ui/checkbox";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

interface CardProps {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  activityName: string;
  activityDescription?: string;
  activityLink: string;
  activityTemplateLink?: string;
}

export default function Card({
  setCounter,
  activityName,
  activityDescription,
  activityLink,
  activityTemplateLink,
}: CardProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-2 w-1/2 h-fit bg-conpec-white rounded-lg p-4 shadow-md">
      <header className="flex items-center justify-between w-full">
        <h3 className="text-xl font-semibold text-conpec-black">
          {activityName}
        </h3>
        <ExternalLink
          className="text-conpec-blue cursor-pointer hover:text-conpec-orange-strong transition-colors"
          onClick={() => router.push(activityLink)}
        />
      </header>

      <section className="w-full">
        {activityDescription && (
          <p className="text-md font-normal text-conpec-black">
            {activityDescription}
          </p>
        )}

        {activityTemplateLink && (
          <a
            className="text-md font-normal text-conpec-blue hover:text-conpec-orange-strong transition-colors"
            href={activityTemplateLink}
          >
            Link para o template
          </a>
        )}
        <div className="flex items-center gap-2">
          <Checkbox
            id="checkbox"
            onCheckedChange={(checked) => {
              if (checked) {
                setCounter((prevCount: number) => prevCount + 1);
              } else {
                setCounter((prevCount) => prevCount - 1);
              }
            }}
            className="border-conpec-orange-strong bg-conpec-blue text-conpec-blue"
          />
          <label
            htmlFor="checkbox"
            className="text-md font-normal text-conpec-black"
          >
            Marcar atividade como concluída
          </label>
        </div>
      </section>
    </div>
  );
}
