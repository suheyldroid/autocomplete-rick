function highlightText(text: string, highlight: string) {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span>
        {parts.map((part, index) => (
            <span key={index} style={part.toLowerCase() === highlight.toLowerCase() ? {fontWeight: 900} : {}}>
            {part}
            </span>
        ))}
    </span>
}

export {highlightText}