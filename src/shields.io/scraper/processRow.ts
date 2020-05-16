export default function processRow(row: HTMLTableRowElement) {
  const labelCell = row.children.item(0) as HTMLTableCellElement | null;
  const urlCell = row.children.item(2) as HTMLTableCellElement | null;
  if (!labelCell) {
    throw new Error("No label cell");
  }
  if (!urlCell) {
    throw new Error("No url cell");
  }

  const labelText = labelCell.textContent;
  const label = labelText?.endsWith(":")
    ? labelText.substr(0, labelText.length - 1)
    : labelText;
  const url = urlCell.textContent;

  if (label === null || url === null) {
    throw new Error("null");
  }

  return { label, url };
}
