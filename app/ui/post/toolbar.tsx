"use client";
import Tippy from '@tippyjs/react';
// import { gitHubEmojis } from '@tiptap-pro/extension-emoji';
import { type Editor } from "@tiptap/react";
import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2,
    Underline,
    Quote,
    Undo,
    Redo,
    Code,
    AlignRight,
    AlignCenter,
    AlignLeft,
    Pilcrow,
    ListPlus,
    ListTree,
    SmilePlus
    // Image
} from "lucide-react";
import EmotionPopup from './emotion-popup';
// import { useState } from 'react';
// import { useCallback } from "react";

const Toolbar = ({ editor }: {editor: Editor|null}) => {
    if (!editor) return null;
    // let isShowEmoji = false;
    // const addImage = useCallback(() => {
    //     const url = window.prompt('URL')
    //         if (url) {
    //             editor.chain().focus().setImage({ src: url }).run()
    //         }
    // }, [editor])
    return (
        <div
            className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
            gap-5 w-full flex-wrap border border-gray-700"
        >
            <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap ">
            {/* Bold */}
            <button
                type="button"
                title="bold"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleBold().run();
                }}
                className={
                    editor.isActive("bold")
                        ? "bg-sky-700 text-white p-2 rounded-lg"
                        : "text-sky-400"
                }
            >
                <Bold className="w-5 h-5" />
            </button>
            {/* Italic */}
            <button
               type="button"
               title="italic"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleItalic().run();
                }}
                className={
                editor.isActive("italic")
                    ? "bg-sky-700 text-white p-2 rounded-lg"
                    : "text-sky-400"
                }
            >
                <Italic className="w-5 h-5" />
            </button>
            {/* Underline */}
            <button
                type="button"
                title="underline"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleUnderline().run();
                }}
                className={
                editor.isActive("underline")
                    ? "bg-sky-700 text-white p-2 rounded-lg"
                    : "text-sky-400"
                }
            >
                <Underline className="w-5 h-5" />
            </button>
            {/* Stricke */}
            <button
                type="button"
                title="strike"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleStrike().run();
                }}
                className={
                    editor.isActive("strike")
                        ? "bg-sky-700 text-white p-2 rounded-lg"
                        : "text-sky-400"
                }
            >
                <Strikethrough className="w-5 h-5" />
            </button>
            {/* Heading */}
            <button
                type="button"
                title="heading"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={
                    editor.isActive("heading", { level: 2 })
                        ? "bg-sky-700 text-white p-2 rounded-lg"
                        : "text-sky-400"
                }
            >
                <Heading2 className="w-5 h-5" />
            </button>
            {/* Subheading */}
            <button
                type="button"
                title="subheading"
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={
                    editor.isActive("heading", { level: 5 })
                        ? "bg-sky-700 text-white p-2 rounded-lg"
                        : "text-sky-400"
                }
            >
                <Pilcrow className="w-5 h-5" />
            </button>
            {/* Bullet */}
            <button
                type="button"
                title="bullet"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleBulletList().run();
                }}
                className={
                    editor.isActive("bulletList")
                        ? "bg-sky-700 text-white p-2 rounded-lg"
                        : "text-sky-400"
                }
            >
                <List className="w-5 h-5" />
            </button>
            {/* Ordered */}
            <button
                type="button"
                title="ordered"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleOrderedList().run();
                }}
                className = {
                    editor.isActive("orderedList")
                        ? "bg-sky-700 text-white p-2 rounded-lg"
                        : "text-sky-400"
                }
            >
                <ListOrdered className="w-5 h-5" />
            </button>
            {/* SplitList */}
            <button
                type="button"
                title="split list"
                onClick={
                    () => editor.chain().focus().splitListItem('listItem').run()
                }
            >
                <ListPlus />
            </button>
            {/* ListItem */}
            <button
                type="button"
                title="listitem"
                onClick={
                    () => editor.chain().focus().sinkListItem('listItem').run()
                }
            >
                <ListTree />
            </button>
            {/* AlignLeft */}
            <button
                type="button"
                title="left"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().setTextAlign('left').run();
                }}
                className={
                    editor.isActive({ textAlign: 'left' })
                        ? "bg-sky-700 text-white p-2 rounded-lg"
                        : "text-sky-400"
                }
            >
                <AlignRight className="w-5 h-5" />
            </button>
            {/* AlignCenter */}
            <button
                type="button"
                title="center"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().setTextAlign('center').run();
                }}
                className={
                    editor.isActive({ textAlign: 'center' })
                        ? "bg-sky-700 text-white p-2 rounded-lg"
                        : "text-sky-400"
                }
            >
                <AlignCenter className="w-5 h-5" />
            </button>
            {/* AlignLeft */}
            <button
                type="button"
                title="right"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().setTextAlign('right').run();
                }}
                className={
                    editor.isActive({ textAlign: 'right' })
                    ? "bg-sky-700 text-white p-2 rounded-lg"
                    : "text-sky-400"
                }
            >
                <AlignLeft className="w-5 h-5" />
            </button>
            {/* BlockQuote */}
            <button
                type="button"
                title="quote"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleBlockquote().run();
                }}
                className={
                    editor.isActive("blockquote")
                        ? "bg-sky-700 text-white p-2 rounded-lg"
                        : "text-sky-400"
                }
            >
                <Quote className="w-5 h-5" />
            </button>
            {/* Code block */}
            <button
                type="button"
                title="code block"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleCodeBlock().run();
                }}
                className={
                    editor.isActive("code")
                        ? "bg-sky-700 text-white p-2 rounded-lg"
                        : "text-sky-400"
                }
            >
                <Code className="w-5 h-5" />
            </button>
            {/* Undo */}
            <button
                type="button"
                title="undo"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().undo().run();
                }}
                className={
                    editor.isActive("undo")
                        ? "bg-sky-700 text-white p-2 rounded-lg"
                        : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
                }
            >
                <Undo className="w-5 h-5" />
            </button>
            {/* Redo */}
            <button
                type="button"
                title="button change"
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().redo().run();
                }}
                className={
                    editor.isActive("redo")
                        ? "bg-sky-700 text-white p-2 rounded-lg"
                        : "text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
                }
            >
                <Redo className="w-5 h-5" />
            </button>
            {/* <button
                type="button"
                title="button change"
                onClick={(e) => addImage(e)}
                className="active:bg-sky-700 active:text-white active:p-2 active:rounded-lg text-sky-400 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
            >
                <Image className="w-5 h-5" />
            </button> */}
            <Tippy
                content = { <EmotionPopup editor={editor}/> }
                placement='top-end'
                className='bg-black translate-x-1/2' 
                trigger="click mouseenter focus"
                hideOnClick="toggle"
                interactive={true}
            >
                <button 
                    type='button'
                    id="emoji"
                >
                    <SmilePlus className="w-5 h-5"/>{' '}
                </button>
            </Tippy>
        </div>
      </div>
    );
};

export default Toolbar;
