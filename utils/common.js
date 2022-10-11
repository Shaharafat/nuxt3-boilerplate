const HOST_REGEX = new RegExp(`^${process.env.HOST}`)

export function transformURL(url) {
  return url.replace(HOST_REGEX, process.env.SITE_URL)
}

export function transformURLToLocal(url) {
  url = url.replace(HOST_REGEX, process.env.SITE_URL)
  if (url.length === 0) {
    return '/'
  } else {
    return url
  }
}

export function transformHostURL(url) {
  const domainMatch = /(https?:\/\/)?([a-z0-9.-]*)/
  const finalURL = url.replace(domainMatch, '')
  if (finalURL.length === 0) {
    return '/'
  } else {
    return finalURL
  }
}

export function stripHtml(html) {
  if (process.client) {
    // Create a new div element
    const temporalDivElement = document.createElement('div')
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || ''
  }
}
