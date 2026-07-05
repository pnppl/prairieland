function Link(el)
  -- Check if the link target starts with # (internal anchor)
  if string.sub(el.target, 1, 1) == "#" then
    -- Return just the text content
    return el.content
  end
  -- Keep external links unchanged
  return el
end
