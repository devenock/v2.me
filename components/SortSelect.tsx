import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ChevronDown } from 'lucide-react'

export default function SortSelect() {
    return (
        <Select defaultValue="start-date">
            <SelectTrigger className="w-[180px]">
                <span className="text-muted-foreground mr-2">Sort by:</span>
                <SelectValue placeholder="Select" />
                <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="start-date">Start date</SelectItem>
                <SelectItem value="stars">Stars</SelectItem>
                <SelectItem value="name">Name</SelectItem>
            </SelectContent>
        </Select>
    )
}

