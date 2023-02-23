export const getJson = async function(url) {
  try {
    const res = await fetch(url);
    return res.json();
  } catch(e) {
    handle(e);
  }
}

export const handle = function(e) {
  console.error(e);
}