import { TemplateResult, html } from "lit";

export function renderSourceIcon(name: string, iconUrl: string | undefined | null): TemplateResult {
    const icon = html`<i class="fas fa-share-square" title="${name}"></i>`;
    if (iconUrl) {
        if (iconUrl.startsWith("fa://")) {
            const url = iconUrl.replaceAll("fa://", "");
            return html`<i class="fas ${url}" title="${name}"></i>`;
        }
        if (window.authentik_sdk?.base) {
            return html`<img src="${window.authentik_sdk?.base}${iconUrl}" alt="${name}" />`;
        }
        return html`<img src="${iconUrl}" alt="${name}" />`;
    }
    return icon;
}
