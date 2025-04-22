"use client";

import {cn} from "@/lib/utils";
import {MapPin, Clock} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

export type TimelineEvent = {
  time: string;
  title: string;
  description: string;
  type: "start" | "break" | "end" | "activity";
  location?: string;
};

interface TimelineProps {
  events: TimelineEvent[];
  onDelete?: (index: number) => void;
  isEditable?: boolean;
}

export function EventTimeline({
  events,
  onDelete,
  isEditable = false,
}: TimelineProps) {
  const typeStyles = {
    start: {
      dot: "bg-green-500",
      line: "bg-green-200",
      badge: "bg-green-100 text-green-600 border-green-200",
    },
    break: {
      dot: "bg-orange-500",
      line: "bg-orange-200",
      badge: "bg-orange-100 text-orange-600 border-orange-200",
    },
    end: {
      dot: "bg-red-500",
      line: "bg-red-200",
      badge: "bg-red-100 text-red-600 border-red-200",
    },
    activity: {
      dot: "bg-blue-500",
      line: "bg-blue-200",
      badge: "bg-blue-100 text-blue-600 border-blue-200",
    },
  };

  const getTypeLabel = (type: TimelineEvent["type"]) => {
    const labels = {
      start: "Início",
      break: "Pausa",
      end: "Fim",
      activity: "Atividade",
    };
    return labels[type];
  };

  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gray-200" />
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative">
            {/* Dot and line */}
            <div
              className={cn(
                "absolute left-6 w-3 h-3 rounded-full -translate-x-1.5",
                typeStyles[event.type].dot
              )}
            />
            {index < events.length - 1 && (
              <div
                className={cn(
                  "absolute left-6 top-3 bottom-0 w-0.5 -translate-x-1/2",
                  typeStyles[event.type].line
                )}
              />
            )}

            {/* Content */}
            <div className="ml-12 relative">
              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge
                        className={cn(
                          "px-2 py-0.5 text-xs font-medium",
                          typeStyles[event.type].badge
                        )}
                      >
                        {getTypeLabel(event.type)}
                      </Badge>
                      <span className="text-sm font-medium text-gray-600">
                        {event.time}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium">{event.title}</h4>
                    {event.description && (
                      <p className="text-gray-600">{event.description}</p>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                  {isEditable && onDelete && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => onDelete(index)}
                    >
                      <Clock className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
