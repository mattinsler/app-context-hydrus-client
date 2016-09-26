function urlJoin(...parts) {
  return parts.map((p, idx) => {
    if (idx === 0) {
      return p.replace(/\/+$/, '');
    } else {
      return p.replace(/^\/+/, '');
    }
  }).join('/');
}

export default urlJoin;
