import React from "react";
import { Note, NoteItem } from "@/shared/ui/Note";
import Link from "next/link";

export default function Template() {
    return (
        <React.Fragment>
            <div className="backtohome">
                <Link href="/">&laquo;</Link>
            </div>
            <Note title="Teplate title">
                <NoteItem>Note item number 1</NoteItem>
                <NoteItem>Note item number 2</NoteItem>
                <NoteItem>Note item number 3</NoteItem>
                <NoteItem>Note item number 4</NoteItem>
                <NoteItem>Note item number 5</NoteItem>
            </Note>
        </React.Fragment>

    )
}